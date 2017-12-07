import Window from '../window';

/**
 * Interface for functions that can be run by Narwhal#run
 * @interface RunnableFunction
 */
export default interface RunnableFunction {
  (window?: Window): void;
}
