import React, { useEffect } from "react";

function BungieUserComponent(props) {




    useEffect(() => {


        console.log("props.uniqueName has changed to " + props.uniqueName)


    }, [props.uniqueName])

    const items = []

    return (
        // <React.Fragment>
        //     {
        //     items.map(item => (

        //         <React.Fragment key={item.id}>
        //             <h1>Title</h1>
        //             <p>{item.title}</p>
        //         </React.Fragment>
        //     ))
        //     }

        //     <td>Name</td>
        //     <td>{item.membershipId}</td>
        // </React.Fragment>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
            flexDirection: 'column'
        }}>
            <h1>{props.uniqueName}</h1>
            <p>{props.about}</p>
            <img src={"https://bungie.net" + props.profilePicturePath} ></img>
        </div>



    )

}

export default BungieUserComponent