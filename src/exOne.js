const getObjectProperty = (obj, path, defaultValue) => {
    if (defaultValue){
      console.log(defaultValue)
    } else {
    let a = path.split('.');
      let otvet = obj;
    for (let i = 0; i< a.length;i++)
      {
       if (otvet) otvet = otvet[a[i]];
      }
      console.log(otvet)
    }
  }
  //
  const obj = {
    'pupa': {
      'lupa': {
        'beep': 'boop',
      },
      'foo': 'bar',
    },
  };
  
  getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
  getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
  getObjectProperty(obj, "pupa.foo"); // > 'bar'
  getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
  getObjectProperty(obj, "pupa.ne.tuda", true); // > true
  getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'