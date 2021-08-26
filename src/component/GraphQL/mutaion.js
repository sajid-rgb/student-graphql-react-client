import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($name:String,$email:String,$date:String,$phone:String,$subject:[String]){
    createUser(users:{name:$name,email:$email,date:$date,phone:$phone,subject:$subject}){
        id,
        name,
        email,
        date,
        phone,
        subject
    }
}

`;
export const UPDATE_USER = gql`
  mutation updatedUser($id:String,$name:String,$email:String,$date:String,$phone:String,$subject:[String]) {
    updatedUser(id: $id,users:{name:$name,email:$email,date:$date,phone:$phone,subject:$subject}){
        id,
        name,
        email,
        date,
        phone,
        subject
    }
  }
`;
export const DELETE_USER = gql`
  mutation deleteUser($id: String) {
    deleteUser(id: $id)
  }
`;
