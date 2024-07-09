interface User {
    name: string;
    age: number;
}

const UserProfile = ({ name, age }: User) => {
    return (
        <div>
            <p>
                user name is , {name}, user age is,{age}{' '}
            </p>
        </div>
    );
};
export default UserProfile;
