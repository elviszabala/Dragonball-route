export async function GetAllData() {
  const response = await fetch('https://dragonball-api.com/api/characters');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}


export async function GetCharacterById(id: number) {
  const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}