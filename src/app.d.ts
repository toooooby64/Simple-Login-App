// See https://kit.svelte.dev/docs/types#app

import type { Session, SupabaseClient } from "@supabase/supabase-js";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: import("@supabase/supabase-js").Session | null;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
