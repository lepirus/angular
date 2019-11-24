import { ReversePipe } from './reverse.pipe';

describe('ReversePipeTest', () => {

  it('should transform', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
