const Header = (props) => {
    return (
      <div>
         <h1>{props.course}</h1>
      </div>
    )
}

const Part = (props) => {
  return (
    <div>
       <p>
        {props.name} {props.exercises}
      </p>
    </div>

  )
}

const Content = (props) => {
 return (
  <div>
    {props.parts.map((element, index) => {
      return <div key={index}> <Part name={element.name} exercises={element.exercises} /></div>
    })}
  </div>
);

// alternative way, using forEach
// const result = []
// props.parts.forEach((element, index) => 
//   result.push(<div key={index}>
//      <Part name={element.name} exercises={element.exercises} />
//     </div>)
//   )
  

//   return (
//     <div>
//       {result}
//     </div>
//   );

}

const Total = (props) => {
  let sum = 0;
  return (
    <div>
      {
        props.exercises.forEach(element => {
          sum+= element.exercises
        })
      }
     <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total exercises={course.parts} />
    </div> 
  )
}

export default App