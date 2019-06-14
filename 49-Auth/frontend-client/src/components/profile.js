import React from "react";
import { Card, Image } from "semantic-ui-react";

/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  bio: 'i like eggs'
} */

const Profile = ({user}) => user ? (
  <Card>
    <Image src={user.avatar} />
    <Card.Content>
      <Card.Header>{user.username}</Card.Header>

      <Card.Description>{user.bio}</Card.Description>
    </Card.Content>
  </Card>
) : null

export default Profile;
