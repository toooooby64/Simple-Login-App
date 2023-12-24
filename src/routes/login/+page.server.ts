import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
        console.log(body);
		const { data, error: err } = await locals.supabase.auth.signInWithPassword({
			email: body.username as string,
			password: body.password as string
		});

		if (err) {
            
			if (err instanceof AuthApiError && err.status === 400) {
                console.log('error');
				return fail(400, {
					error: 'Invalid credentials'
				});
			}
			return fail(500, {
				message: 'Server error. Try again later.'
			});
		}

		throw redirect(303, '/');
	}
};
