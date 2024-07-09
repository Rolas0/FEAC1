import UserProfile from './UserProfile';

const TsPractic = () => {
    //1
    const sum = (a: number, b: number): number => {
        return a + b;
    };
    console.log(sum(1, 2));
    //2
    interface GreetingProps {
        name: string;
        age: number;
    }

    const greet = (person: GreetingProps): string => {
        return `Greetings, ${person.name}, your age is ${person.age},`;
    };
    const user: GreetingProps = {
        name: 'Jonas',
        age: 30,
    };
    console.log(greet(user));
    //3

    const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const getFirstNumber = (num: number[]) => {
        return num[0];
    };
    console.log(getFirstNumber(numberArray));

    //4
    enum Colors {
        R = 'Red',
        G = 'Green',
        B = 'Blue',
    }

    const getColorName = (color: Colors) => {
        console.log(`Your color name is, ${color}`);
    };

    getColorName(Colors.R);
    //5
    const nameGreet = (name: string): string => {
        return `Hello, ${name}!`;
    };

    console.log(nameGreet('Rola'));
    return (
        <div>
            <UserProfile name="Rolas" age={28} />
        </div>
    );
};
export default TsPractic;
