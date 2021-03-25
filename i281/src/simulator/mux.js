/**
 * This class simulates a multiplexer.
 * @param size: Sets the size of a multiplexer, must be power of 2
 * @since 1.0
 * @author Bryce Snell
 * 
*/

export class Multiplexer {
    constructor(size) {
        this.state = null;
        
        if(this.powerOfTwo(size) == true) this.size = size;
        else throw 'Multiplexer size is not a power of two';

        this.sources = new Array(this.size);
    }
    

    /**
     * This function returns a value from a register
     * @since 1.0
     * @returns: the current state of the register
     * @author Bryce Snell
     * 
    */
    getState() {
        return this.state;
    }


    /**
     * This function sets the state of a multiplexer
     * @param state: integer for the state
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    setState(state) {
        if(0 <= state && state <= (this.size - 1)) this.state = state;
        else throw 'Invalid multiplexer state: ' + state;
    }

    /**
     * This function sets the input states of the multiplexer
     * @param port: The input port to set the value of
     * @param value: Input value to the mux
     * @since: 3.0 - The great callback change was not good, we have reverted
     * @author Bryce Snell
     */
    setSource(port, value) {
        if(0 <= port && port <= (this.size - 1)) {
            this.sources[port] = value;
        }   
        else throw 'Invalid multiplexer port: ' + port;
    }

    /**
     * This function gets the current output of a multiplexer
     * @since: 2.0 - Allows callbacks and "static" data
     * @author Bryce Snell
     */
    getOutput() {
        return this.sources[this.state];
    }


    /**
     * This helper function checks if a number is a power of two
     * @param n: A number to check
     * @returns: True if power of two, false otherwise
     * @since 1.0
     * @author Bryce Snell
     * 
    */
    powerOfTwo(n) {
        return n && (n & (n-1)) === 0;
    }
};