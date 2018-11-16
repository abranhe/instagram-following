import test from 'ava';
import f from '.';

test('Testing @tryhtml', async t => {
	const following = await f('tryhtml');
	t.is(following, following);
});
