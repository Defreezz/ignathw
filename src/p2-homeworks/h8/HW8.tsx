import React, {useState} from 'react'
import {check18AC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id:number
    name:string
    age:number
}

const initialPeople:UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 6, name: 'Виктор', age: 17},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <li key={p._id}>
            <span>{p.name}</span> <span style={{float:"right"}}>{p.age}</span>
        </li>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, check18AC()))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
          <ul style={{maxWidth:"150px",listStyle:"none"	}}>
              {finalPeople}
          </ul>
            <span>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
            </span>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
