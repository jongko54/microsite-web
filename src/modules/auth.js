export function login({ email, password }) {
  if (email === 'russ' && password === 'whynot0') {
    return {
      access_token: 'jx84e3kjew1njej3al2q9w',
      refresh_token: 'g2rjfd7452bjfgn;a&*(jkehj',
    };
  } else {
    return undefined;
  }
}