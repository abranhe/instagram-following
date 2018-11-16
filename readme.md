<p align="center">
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/instagram-following"><img src="https://cdn.abranhe.com/projects/instagram-following/logo.svg"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/instagram-following">
	instagram-following</a>: Get the numbers of accounst followed by an Instagram user
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/instagram-following"><img src="https://img.shields.io/travis/abranhe/instagram-following.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abranhe.com/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abranhe.com/badges/patreon.svg" /></a>
	<a href="https://github.com/abranhe/instagram-following/blob/master/license"><img src="https://img.shields.io/github/license/abranhe/instagram-following.svg" /></a>


</p>

## Install

```
$ npm install instagram-following
```

## Usage

```js
const following = require('instagram-following');

following('abranhe').then(no => {
    console.log(no);
    // 150
});
```

## API

### `following(username)`

*Returns a the number of accounts followed by an Instagram user*

Type: `string`

###### Parameters

- `username` - The username of the account you'd like to check.


## Related

- [instagram-following-cli][instagram-following-cli]: cli for this module.
- [instagram-followers][instagram-followers]: Get the numbers of followers of a user on Instagram.

## Team

|[![Carlos Abraham Logo][abranhe-img]][abranhe]|
| :-: |
| [Carlos Abraham][abranhe] |

## License

[MIT][license] License © [Carlos Abraham][abranhe]

<!-------------------- Links ------------------------>
[abranhe]: https://github.com/abranhe
[abranhe-img]: https://avatars3.githubusercontent.com/u/21347264?s=50
[license]: https://github.com/abranhe/instagram-following/blob/master/license
[instagram-following-cli]: https://github.com/abranhe/instagram-following-cli
[instagram-followers]: https://github.com/abranhe/instagram-followers
