class Color {

    constructor(red: number, green: number, blue: number)
    {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    clone():Color
    {
        return new Color(this.red, this.green, this.blue)
    }

    toHex():string
    {
        return (256*(this.red*256+this.green)+this.blue).toString(16);
    }
}