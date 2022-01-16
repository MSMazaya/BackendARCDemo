function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  await resolveAfter2Seconds();
  console.log('calling');
}

asyncCall();
