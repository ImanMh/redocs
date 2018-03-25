const Redocs = {};

describe('Redocs', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(Redocs, 'greet');
      Redocs.greet();
    });

    it('should have been run once', () => {
      expect(Redocs.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(Redocs.greet).to.have.always.returned('hello');
    });
  });
});
