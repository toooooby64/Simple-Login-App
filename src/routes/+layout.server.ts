import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
	console.log('layout load called')
	return {
		session: await getSession()
	};
};
