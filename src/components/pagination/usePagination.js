export function usePagination(data, numItemsPerPage) {
    return [new Pager(data, numItemsPerPage)];
}

class Pager {
    constructor(items, numItemsPerPage) {
        this.paginated = paginate(items, numItemsPerPage);
        this.numberOfPages = this.paginated.length;
        this.currentPage = this.paginated[0];
    }

    getCurrentPage() {
        return this.currentPage;
    }

    setCurrentPage(pageNumber) {
        if (pageNumber < this.numberOfPages && pageNumber >= 0) {
            const pageIndex = pageNumber - 1;
            this.currentPage = this.paginated[pageIndex];
        }
    }

    setNumberOfItemsPerPage(numberOfItems) {
        this.paginated = paginate(items, numberOfItems);
    }
}

function paginate(items, numItemsPerPage) {
    const numberOfPages = Math.ceil(data.length / numItemsPerPage);
    const paginated = Array.from(numberOfPages, (_, index) => {
        const start = index * numItemsPerPage;
        const onePage = items.slice(start, start + numItemsPerPage);
        return onePage
    })

    return paginated;
}

