/*
==============================
React Interview Practice – Question 1 (Extended Version)
==============================

Build a ProfileCard system with Parent ↔ Child communication.

---------------------------------
PART 1 – Basic Requirements
---------------------------------

1. Create a ProfileCard component.

2. ProfileCard must accept the following props:
   - name (string)
   - age (number)
   - isOnline (boolean)
   - onToggle (function)
   - onRemove (function)

3. ProfileCard should display:
   - Name
   - Age
   - "🟢 Online" if isOnline is true
   - "🔴 Offline" if isOnline is false

4. Add a button:
   - On click → alert("Hello <name>")

5. Add a button:
   - "Toggle Status"
   - Should call onToggle and update that specific user's status in parent

6. Add a button:
   - "Remove"
   - Should remove that specific user from parent state

---------------------------------
PART 2 – Parent Component Requirements
---------------------------------

1. Parent should:
   - Maintain users array in state using useState
   - Each user should have:
        name
        age
        isOnline

2. Parent must:
   - Render at least 3 ProfileCard components using .map()

3. Proper key must be used.
   - DO NOT use index as key.

4. Parent must implement:
   - handleToggle(name)
   - handleRemove(name)

5. State updates must:
   - Use functional updates
   - NOT mutate the original array

---------------------------------
PART 3 – Technical Rules
---------------------------------

1. Props must be flattened (NOT users object).
2. Use proper TypeScript types.
3. Do NOT mutate state directly.
4. Use proper event handler reference (no inline arrow for alert button).
5. Code should be clean and readable.


*/

import UserCard from "./UserCard";
import { useState } from "react";

function CardApp() {
    
    const [data, setData] = useState([
        {
            id : 1,
            name : "ABC",
            age: 12,
            isOnline : true
        },
        {
            id: 2,
            name : "DEF",
            age: 13,
            isOnline : false
        },
        {
            id: 3,
            name : "DEF",
            age: 14,
            isOnline : true
        }
    ])

    const removeUser = (userIndex : number) => {
        setData(prev => prev.filter(item=> userIndex !== item.id))
    }

    const toggleUser = ( userIndex : number) => {
        setData(prev => prev.map(item => (item.id === userIndex) ? {...item, isOnline : !item.isOnline} : item))
    }


    return(<>
    {data.map((item,index) => (
        <UserCard name={item.name} age={item.age} isOnline={item.isOnline}  key={item.id} id={item.id}
        handleRemove={removeUser} handleToggle={toggleUser}
        ></UserCard>
    ))}
    </>)
}

export default CardApp;