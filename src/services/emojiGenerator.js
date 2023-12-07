const positiveEmojis = [
    "😊", "😄", "🌟", "👍", "💖", "🎉", "😍", "🥳", "🌈", "🌺",
    "🌞", "🤗", "👏", "🎈", "🎊", "🌸", "🌷", "🌼", "💐", "🍀",
    "🌻", "🌹", "🐾", "🦋", "🌠", "🌌", "🍇", "🍓", "🍒", "🍍",
    "🍉", "🍊", "🍋", "🍎", "🍏", "🍌", "🍐", "🍑", "🍒", "🍔",
    "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞",
    "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨",
    "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲",
    "🍳", "🍴", "🍵", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂",
    "🥃", "🥤", "🎂", "🎁", "🎀", "🎆", "🎇", "🎃", "🎄", "🎅",
    "🤶", "🦌", "🎁", "🎊", "🎋", "🎌", "🎍", "🎎", "🎏", "🎐",
  ];
 
function generateRandomXP() {
  return Math.floor(Math.random() * 100) + 1;
}

function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;  
    return formattedDate;
}
  
export const emojiXPList = positiveEmojis.map(emoji => ({ emoji, xp: generateRandomXP() }));

export function getRandomEmojiWithXp() {
    const randomId = Math.floor(Math.random() * positiveEmojis.length) + 1;
    return {...emojiXPList[randomId], date : getCurrentDate()}
}
