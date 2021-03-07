module.exports = function check(str, bracketsConfig) {

  let configs = bracketsConfig.map((e) => {
    return e.join('');
  });

  // recursive method
  function checkStr(str) {
    let exit = true;

    if (configs.some(e => {
      if (str.indexOf(e) != -1) {
        console.log('ok', e);
        return true;
      }

    })) {
      exit = false;
    }

    for (let i = 0; i < configs.length; i++) {
      let config = configs[i];
      if (str.indexOf(config) != -1) {
        str = str.replace(config, '');
      }
    }
    if (!exit && str) {
      return checkStr(str);
    } else {
      return str;
    }
  }
  str = checkStr(str);
 
  return str.length === 0;
}