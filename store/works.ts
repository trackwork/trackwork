import { Store } from 'pullstate';

type Step = {
	start: string;
	end: string;
	has_ended: boolean;
};

type Work = {
	id: string;
	title: string;
	description: string;
	created_at: string;
	steps: Step[];
};

type WorkStoreProp = {
	active: null | Work;
	works: Work[];
};

export const WorkStore = new Store<WorkStoreProp>({
	active: null,
	works: [],
});
