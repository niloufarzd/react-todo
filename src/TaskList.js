import React from 'react';

const TaskList = ({tasks}) => {
  return (
    <div className={"list"}>
      {tasks.map(item=> <TaskItem item={item}/>)}
    </div>
  );
};

const TaskItem = ({item})=>{
  return <div className={"task"}>
    <p className={"taskTitle"}>{item}</p>
  </div>
}

export default TaskList;