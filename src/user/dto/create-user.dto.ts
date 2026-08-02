// we create DTO = Data Transfer Object to define the structure of the data that we expect to receive from the client.
// it's use to validate the data which came from the client.
export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  age: number;
}
