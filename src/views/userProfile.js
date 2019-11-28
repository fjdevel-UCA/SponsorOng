import React from "react";
import { UserCard } from "components/UserCard/UserCard.jsx";

export default class Home extends React.Component {
    render() {
      return (
            <div className="profile-container">
                <UserCard>
                    avatar=;
		            Name=;
                </UserCard>
                <div className="board">
                <Table striped hover responsive>
                    <thead>
                        <tr>
                        {
				thArray.map((prop, key => {
					    return(
					        <th key={key}>{prop}</th>
					        );
                            })
                        )}  
                        </tr>
                    </thead>
                </Table>
                </div>
            </div>
      );
    }
}