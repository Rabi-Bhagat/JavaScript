function firstline() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('I am the hero of firstline');
        reject('i am the error part of the code'); 
      }, 4000);
    });
  }
  
  function secondline() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('I am secondline');
        resolve();
      }, 3000);
    });
  }
  
  function thirdline() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('I am thirdline');
        resolve();
      }, 3500);
    });
  }
  
  async function main() {
    await firstline();
    await secondline();
    await thirdline();
  }
  
  main().catch((error) => {
    console.error('Caught an error:', error);
  });
  