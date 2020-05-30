//% color=#D400D4 weight=124 icon="\uf194"
namespace sensor {

    //% block
    export function sensorDifference(l: SensorDifferenceDectectionValue, otherMicrobits: number, j: Dimension): number {
        switch (l) {

            case SensorDifferenceDectectionValue.a:
                return input.compassHeading() - otherMicrobits
                break;
            case SensorDifferenceDectectionValue.b:
                return input.lightLevel() - otherMicrobits
                break;
            case SensorDifferenceDectectionValue.c:
                switch (j) {
                    case Dimension.Strength:
                        return input.acceleration(Dimension.Strength) - otherMicrobits
                        break;
                    case Dimension.X:
                        return input.acceleration(Dimension.X) - otherMicrobits
                        break;
                    case Dimension.Y:
                        return input.acceleration(Dimension.Y) - otherMicrobits
                        break;
                    case Dimension.Z:
                        return input.acceleration(Dimension.Z) - otherMicrobits
                        break;


                }
            case SensorDifferenceDectectionValue.d:
                return input.temperature() - otherMicrobits
                break


        }
    }
    
        
        













    









































}