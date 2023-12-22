import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { useState } from "react";

const DashboardContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axios = useAxios();
  const { user } = useAuth();

  const { data: allTask = [], refetch } = useQuery({
    queryKey: ["alltask", user],
    queryFn: () =>
      axios.get(`/alltask?email=${user?.email}`).then((res) => res.data),
  });

  const [editTask, setEditTask] = useState(null);

  const onSubmit = (data) => {
    const { title, dedline, priority, descriptions } = data;

    const task = {
      title: title,
      dedline: dedline,
      priority: priority,
      descriptions: descriptions,
      status: "to-do",
      email: user?.email,
    };

    axios.post("/alltask", task).then(() => {
      refetch();
      toast("Add Task Successfully", {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      reset(); // Reset form after submission
    });
  };

  const onSubmitEditedTask = (data) => {
    if (editTask) {
      const updatedTask = {
        ...editTask,
        title: data.title,
        dedline: data.dedline,
        priority: data.priority,
        descriptions: data.descriptions,
      };

      axios.put(`/alltask/${editTask._id}`, updatedTask).then(() => {
        refetch();
        toast("Task Edited Successfully", {
          icon: "👍",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        setEditTask(null);
      });
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setValue("title", task.title);
    setValue("dedline", task.dedline);
    setValue("priority", task.priority);
    setValue("descriptions", task.descriptions);
  };

  const to_do = allTask.filter((task) => task.status === "to-do");
  const ongoing = allTask.filter((task) => task.status === "ongoing");
  const completed = allTask.filter((task) => task.status === "completed");

  const dragStarted = (e, id) => {
    console.log("drag has been started");
    e.dataTransfer.setData("todoId", id);
  };

  const dragingOver = (e) => {
    e.preventDefault();
    console.log("draging over now");
  };

  const dragDroppedTodo = (e, status) => {
    console.log("you are drop now");
    let transferredTaskId = e.dataTransfer.getData("todoId");
    const taskToUpdate = allTask.find((task) => task._id === transferredTaskId);

    if (taskToUpdate) {
      axios
        .put(`/alltask/${transferredTaskId}`, {
          status: status,
          priority: taskToUpdate.priority, // Include priority in the update
        })
        .then((res) => {
          console.log(res.data);
          refetch();
        });
    }
  };

  const dragDroppedOngoing = (e, status) => {
    console.log("you are drop now");
    let transferredTaskId = e.dataTransfer.getData("todoId");
    const taskToUpdate = allTask.find((task) => task._id === transferredTaskId);

    if (taskToUpdate) {
      axios
        .put(`/alltask/${transferredTaskId}`, {
          status: status,
          priority: taskToUpdate.priority, // Include priority in the update
        })
        .then((res) => {
          console.log(res.data);
          refetch();
        });
    }
  };

  const dragDroppedCompleted = (e, status) => {
    console.log("you are drop now");
    let transferredTaskId = e.dataTransfer.getData("todoId");
    const taskToUpdate = allTask.find((task) => task._id === transferredTaskId);

    if (taskToUpdate) {
      axios
        .put(`/alltask/${transferredTaskId}`, {
          status: status,
          priority: taskToUpdate.priority, // Include priority in the update
        })
        .then((res) => {
          console.log(res.data);
          refetch();
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`/alltask/${id}`).then(() => {
      refetch();
      toast("Task Deleted Sucessfully", {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    });
  };

  return (
    <>
      <form
        onSubmit={
          editTask ? handleSubmit(onSubmitEditedTask) : handleSubmit(onSubmit)
        }
      >
        <div className="grid grid-cols-3 gap-3">
          <div className="w-full">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <br />
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Title"
              className="border-2 border-black px-2 py-1 w-full"
              defaultValue={editTask ? editTask.title : ""}
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="dedline" className="font-medium">
              Deadline
            </label>
            <br />
            <input
              {...register("dedline", { required: true })}
              type="date"
              className="border-2 border-black px-2 py-1 w-full"
              defaultValue={editTask ? editTask.dedline : ""}
            />
            {errors.dedline && <span>This field is required</span>}
          </div>
          <div className="w-full">
            <label htmlFor="priority" className="font-medium">
              Priority
            </label>
            <br />
            <select
              {...register("priority", { required: true })}
              name="priority"
              id="priority"
              className="border-2 border-black px-2 py-1 w-full"
              defaultValue={editTask ? editTask.priority : ""}
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
            {errors.priority && <span>This field is required</span>}
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="descriptions" className="font-medium">
            Descriptions
          </label>
          <br />
          <textarea
            {...register("descriptions", { required: true })}
            className="border-2 border-black px-2 py-1 w-full"
            name="descriptions"
            id=""
            rows="2"
            defaultValue={editTask ? editTask.descriptions : ""}
          ></textarea>
          {errors.descriptions && <span>This field is required</span>}
        </div>
        <input
          type="submit"
          value={editTask ? "Edit Task" : "Add Task"}
          className="bg-gray-800 px-7 py-2.5 text-white font-normal cursor-pointer"
        />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div
          onDragOver={(e) => dragingOver(e)}
          onDrop={(e) => dragDroppedTodo(e, "to-do")}
          className="bg-[#E3DEFC] p-3 rounded-md"
        >
          <h1 className="text-2xl font-semibold mb-2">TO-DO</h1>
          {to_do?.map((task) => (
            <div
              key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-[#FCEEDF] mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <div className="flex justify-center px-2">
                  <button
                    onClick={() => handleEdit(task)}
                    className="text-xl text-green-700 pr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(task?._id)}
                    className="text-xl text-red-700"
                  >
                    <FaTrashCan />
                  </button>
                </div>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <div
                key={task?._id}
                draggable
                onDragStart={(e) => dragStarted(e, task._id)}
                className={`bg-[#FCEEDF] mb-2 rounded-md p-2 ${
                  task?.priority === "low"
                    ? "bg-green-400"
                    : task?.priority === "moderate"
                    ? "bg-orange-400"
                    : task?.priority === "high"
                    ? "bg-red-400"
                    : ""
                }`}
              >
                <span className="font-medium px-5 text-white  rounded-2xl">
                  {task?.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          onDragOver={(e) => dragingOver(e)}
          onDrop={(e) => dragDroppedOngoing(e, "ongoing")}
          className="bg-[#E3DEFC] p-3 rounded-md"
        >
          <h1 className="text-2xl font-semibold mb-2 ">Ongoing</h1>
          {ongoing?.map((task) => (
            <div
              key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-[#FCEEDF] mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <div className="flex justify-center px-2">
                  <button
                    onClick={() => handleEdit(task)}
                    className="text-xl text-green-700 pr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(task?._id)}
                    className="text-xl text-red-700"
                  >
                    <FaTrashCan />
                  </button>
                </div>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <div
                key={task?._id}
                draggable
                onDragStart={(e) => dragStarted(e, task._id)}
                className={`bg-[#FCEEDF] mb-2 rounded-md p-2 ${
                  task?.priority === "low"
                    ? "bg-green-400"
                    : task?.priority === "moderate"
                    ? "bg-orange-400"
                    : task?.priority === "high"
                    ? "bg-red-400"
                    : ""
                }`}
              >
                <span className="font-medium px-5 text-white  rounded-2xl">
                  {task?.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          onDragOver={(e) => dragingOver(e)}
          onDrop={(e) => dragDroppedCompleted(e, "completed")}
          className="bg-[#E3DEFC] p-3 rounded-md"
        >
          <h1 className="text-2xl font-semibold mb-2">Completed</h1>
          {completed?.map((task) => (
            <div
              key={task?._id}
              draggable
              onDragStart={(e) => dragStarted(e, task._id)}
              className="bg-[#FCEEDF] mb-2 rounded-md p-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-medium">{task?.title}</h1>
                <div className="flex justify-center px-2">
                  <button
                    onClick={() => handleEdit(task)}
                    className="text-xl text-green-700 pr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(task?._id)}
                    className="text-xl text-red-700"
                  >
                    <FaTrashCan />
                  </button>
                </div>
              </div>
              <p className="text-sm leading-4 mb-2">{task?.descriptions}</p>
              <div
                key={task?._id}
                draggable
                onDragStart={(e) => dragStarted(e, task._id)}
                className={`bg-[#FCEEDF] mb-2 rounded-md p-2 ${
                  task?.priority === "low"
                    ? "bg-green-400"
                    : task?.priority === "moderate"
                    ? "bg-orange-400"
                    : task?.priority === "high"
                    ? "bg-red-400"
                    : ""
                }`}
              >
                <span className="font-medium px-5 text-white  rounded-2xl">
                  {task?.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
