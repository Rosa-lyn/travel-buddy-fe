const { separatesHashtags } = require('./utils');

describe('separatesHashtags', () => {
  it('returns an empty array when no hashtags are present', () => {
    const actual = separatesHashtags('string');
    expect(actual).toEqual(null);
  })

  it('returns an array containg a single hashtag', () => {
    const actual = separatesHashtags('this is a #string');
    expect(actual).toEqual(['#string']);
  })

  it('returns an array several hashtags', () => {
    const actual = separatesHashtags('this is a #string of #cats');
    expect(actual).toEqual(['#string', '#cats']);
  })
});



