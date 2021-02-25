const MAX_PAGE_UPDATED = (state, maxPage) => {
	state.maxPage = maxPage;
};

const PAGE_UPDATED = (state, page) => {
	if (page >= 0 && page <= state.maxPage) {
		state.page = page;
	}
};

const NEXT_PAGE = (state) => {
	if (state.page < state.maxPage) {
		state.page += 1;
	}
};

const PREV_PAGE = (state) => {
	if (state.page > 0) {
		state.page -= 1;
	}
};

export default {
	MAX_PAGE_UPDATED,
	PAGE_UPDATED,
	NEXT_PAGE,
	PREV_PAGE,
};
