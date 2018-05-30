describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() => {
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',() => {
      assert.isObject(cipher.createCipherWithOffset(7),'es objeto');
        it('encode deberia ser una propiedad', () => {
          assert.Property(cipher.createCipherWithOffset(7),'encode','propiedad');
        });
        it('decode deberia ser una propiedad', () => {
          assert.property(cipher.createCipherWithOffset(7),'decode','propiedad');
         
        });
    });

    describe('cipher.createCipherWithOffset().encode', () => {
      it('deberia ser una funcion', () => {
        assert.isFunction(cipher.createCipherWithOffset(7).encode,'function');
      });
    });
    describe('cipher.createCipherWithOffset().decode', () => {
      it('deberia ser una funcion', () => {
        assert.isFunction(cipher.createCipherWithOffset(7).decode,'function');
      });
    });
  });
});
