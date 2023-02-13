class Gradient
{
    static rainbowGradientMap(array: Array): Map<any,Color>
    {
        let map = new Map()
        let divisor: number = Math.round(array.length / 5);
        let sectionHead: number = 0;

        let color: Color= new Color(255,0,0);
        let variable: string = 'green';
        let decreasing: boolean = false;
        for (let i: number = 0; i < array.length; i++) {
            if (Math.trunc(i % divisor) === 0) {
                let currentSectionNum = Math.trunc(i / divisor);
                sectionHead = i;
                switch (currentSectionNum) {
                    case 3: {
                        color['blue'] = 255;
                        variable = 'green';
                        decreasing = true;
                        break;
                    }
                    case 1: {
                        color['green'] = 255;
                        variable = 'red';
                        decreasing = true;
                        break;
                    }
                    case 4: {
                        color['green'] = 0;
                        variable = 'red';
                        decreasing = false;
                        break;
                    }
                    case 2: {
                        color['red'] = 0;
                        variable = 'blue';
                        decreasing = false;
                        break;
                    }
                }
            }
            color[variable] = decreasing ?
                Math.max(0, (divisor - i % divisor) / divisor * 255) :
                Math.min(255, (i - sectionHead) / divisor * 255);
            // colors[i] = new Color(color[0],color[1],color[2])
            map.set(array[i],color.clone());
        }
    }
    // Returns an array containing a gradient of the rainbow with numColors colors in the gradient
    static rainbowGradientArray(numColors: number): Array<Color>
    {
        let colors = new Array(numColors)
        let divisor: number = Math.round(numColors / 5);
        let sectionHead: number = 0;

        let color: Color= new Color(255,0,0);
        let variable: string = 'green';
        let decreasing: boolean = false;
        for (let i: number = 0; i < numColors; i++) {
            if (Math.trunc(i % divisor) === 0) {
                let currentSectionNum = Math.trunc(i / divisor);
                sectionHead = i;
                // no need to check for 0 because we already set that at the beginning
                switch (currentSectionNum) {
                    case 3: {
                        color['blue'] = 255;
                        variable = 'green';
                        decreasing = true;
                        break;
                    }
                    case 1: {
                        color['green'] = 255;
                        variable = 'red';
                        decreasing = true;
                        break;
                    }
                    case 4: {
                        color['green'] = 0;
                        variable = 'red';
                        decreasing = false;
                        break;
                    }
                    case 2: {
                        color['red'] = 0;
                        variable = 'blue';
                        decreasing = false;
                        break;
                    }
                }
            }
            color[variable] = decreasing ?
                Math.max(0, (divisor - i % divisor) / divisor * 255) :
                Math.min(255, (i - sectionHead) / divisor * 255);
            colors[i] = color.clone();
        }
    }
}