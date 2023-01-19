<script>
  import { getNotificationsContext } from 'svelte-notifications';
  import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
  import { slide } from 'svelte/transition';

  import PageContainer from '$lib/modules/page-container/page-container.svelte';
  import PageHeader from '$lib/modules/page-header/page-header.svelte';
  import TransactionTimeline from '$lib/modules/transaction-timeline/transaction-timeline.svelte';
  import { readResponseStreamAsJson, throwIfHttpError } from '$lib/shared/shared-utils';
  import { transactionHistory$ } from '$lib/shared/shared.store';
  import { notifcationSettings } from '$lib/shared/shared.constant';
  import LoadingButtonSpinnerIcon from '$lib/shared/icons/loading-button-spinner-icon.svelte';

  import EmptyState from './empty-state.svelte';
  import ChevronDownIcon from '$lib/shared/icons/chevron-down-icon.svelte';
    import MagnifyingGlassIcon from '$lib/shared/icons/magnifying-glass-icon.svelte';

  const { addNotification } = getNotificationsContext();

  export let data;

  let isLoading;

  const fetchTransactionHistory = async () => {
    isLoading = true;

    const response = await fetch(`/api/transaction-history`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        something: 'good'
      })
    })
      .then(throwIfHttpError)
      .then(readResponseStreamAsJson);

    transactionHistory$.set(response);

    addNotification({
      ...notifcationSettings,
      text: `${response?.length || 0} Transactions fetched`
    });

    isLoading = false;
  };
</script>

<PageContainer>
  <!-- Page header -->
  <svelte:fragment slot="page-header">
    <PageHeader title={'Transactions'}>
      <svelte:fragment slot="primary-action">
        <div class="flex items-center gap-2">
          <!-- Search -->
          <div
            class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"
          >
            <div class="w-full max-w-lg lg:max-w-xs">
              <label
                for="search"
                class="sr-only">Search</label
              >
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <MagnifyingGlassIcon />
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>

          <!-- More actions -->
          <Popover let:open>
            <PopoverButton>
              <button
                type="button"
                class="inline-flex gap-1 items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                More actions
                <ChevronDownIcon extraClasses="text-gray-700 h-3.5 w-3.5" />
              </button>
            </PopoverButton>

            {#if open}
              <PopoverPanel
                let:close
                as="div"
              >
                <div
                  transition:slide
                  class="absolute divide-y max-lg:right-0 max-sm:left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <button
                    on:click={() => {
                      console.log('clicky');
                    }}
                    on:click={() => close(null)}
                    class="w-full flex items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Hide settings
                  </button>
                  <button
                    on:click={() => {
                      console.log('clicky');
                    }}
                    on:click={() => close(null)}
                    class="w-full flex items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Hide transactions
                  </button>
                </div>
              </PopoverPanel>
            {/if}
          </Popover>

          <!-- Primary CTA -->
          {#if isLoading}
            <button
              disabled
              type="button"
              class="inline-flex gap-1 disabled:opacity-50 items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <LoadingButtonSpinnerIcon />
              Fetch transactions
            </button>
          {:else}
            <button
              on:click={fetchTransactionHistory}
              type="button"
              class="inline-flex gap-1 items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Fetch transactions
            </button>
          {/if}
        </div>
      </svelte:fragment>
    </PageHeader>
  </svelte:fragment>

  <!-- Page content -->
  <svelte:fragment slot="page-content">
    {#if $transactionHistory$.length > 0}
      <TransactionTimeline />
    {:else}
      <EmptyState {fetchTransactionHistory} />
    {/if}
  </svelte:fragment>
</PageContainer>