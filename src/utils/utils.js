const separatesHashtags = (string) => {
  const regex = /#\w+/gi;
  const matchedString = string.match(regex);
  return matchedString;
};

export default separatesHashtags;
