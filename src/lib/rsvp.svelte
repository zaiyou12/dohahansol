<script>
  /** @param {{ currentTarget: EventTarget & HTMLFormElement}} event */
  function handleSubmit(event) {
    const formData = new FormData(event.currentTarget)
    console.log(formData.get('name'));
    event.currentTarget.reset();
  }
</script>

<div class="bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-wrapper">
    <p class="sub-title">RSVP</p>
    <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">참석하기</h2>
    <p class="mt-10 body">명패를 미리 준비하기 위해 참석자분의 성함을 받고 있습니다.</p>
    <p class="body">결혼식 10일 전인 11월 26일까지 보내주시면 최대한 준비하겠습니다.</p>
    <form class="mx-auto mt-10 flex max-w-md gap-x-4" on:submit|preventDefault={handleSubmit}>
      <input
        id="name"
        name="name"
        type="text"
        required
        class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        placeholder="성함을 입력해주세요"
        minlength="2"
      />
      <button
        type="submit"
        class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        등록
      </button>
    </form>
  </div>
</div>