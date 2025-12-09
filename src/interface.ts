//? Interface
// interface is used to create object type => object, function, class
// preferred method: class, object => use interface; else => use type

//! interface cannot be used for premitive
// primmitive:
type Address = string;
// union type can only be used in primitives
type NullOrUndefiend = null | undefined;

type Client = {
  name: string;
  age: number;
};

interface Client2 {
  name: string;
  age: number;
}
