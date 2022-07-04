interface Action {
  type: string
  payload: {
    name?: string
    id?: Date
  }
}

interface StudentProps {
  name: string
  dispatch: React.Dispatch<Action>
  id: Date
  isHere: boolean
}

const Student = ({name, dispatch, id, isHere}: StudentProps) => {
  return(
    <div>
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black',
        }}
        onClick={() => {
          dispatch({type: 'mark-student', payload: {id}})
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({type: 'delete-student', payload: {id}})
        }}
      >
        삭제
      </button>
    </div>
  )
}

export default Student

