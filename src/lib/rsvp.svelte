<script>
	import { addDoc, collection } from 'firebase/firestore';
	import { db } from '../utils/firebase';

  /** 
   * @param {FormDataEntryValue | null} name 
   * @param {FormDataEntryValue | null} type 
   * @param {FormDataEntryValue | null} count */
  async function addUser(name, type, count){
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name, type, count
      })
    } catch (e) {
      alert(`Error: ${e}`)
    }
  }

  /** @param {{ currentTarget: EventTarget & HTMLFormElement}} event */
  function handleSubmit(event) {
    const formData = new FormData(event.currentTarget)
    addUser(formData.get('name'), formData.get('type'), formData.get('count'))
    event.currentTarget.reset();
  }
</script>

<div class="bg-gray-50 section">
  <div class="text-wrapper">
    <p class="sub-title">RSVP</p>
    <h2 class="mt-2">참석하기</h2>
    <p class="mt-10 body">명패를 미리 준비하기 위해 참석자분의 성함을 받고 있습니다.</p>
    <p class="body">결혼식 10일 전인 11월 26일까지 보내주시면 최대한 준비하겠습니다.</p>
    <form class="mx-auto mt-10 flex flex-col max-w-md gap-4" on:submit|preventDefault={handleSubmit}>
      <div class="flex gap-4">
        <div class="input-wrapper flex-auto">
          <label for="type" class="block text-sm font-medium leading-6 text-gray-900">
            신랑/신부
          </label>
          <select id="type" name="type">
            <option>신랑</option>
            <option>신부</option>
          </select>
        </div>
        <div class="input-wrapper flex-auto">
          <label for="count" class="block text-sm font-medium leading-6 text-gray-900">
            참석인원
          </label>
          <select id="count" name="count">
            <option>1명</option>
            <option>2명</option>
            <option>3명</option>
            <option>4명</option>
            <option>5명</option>
          </select>
        </div>
      </div>
      <div class="flex gap-x-4">
        <input
        id="name"
        name="name"
        type="text"
        required
        placeholder="성함을 입력해주세요"
        minlength="2"
        />
        <button type="submit">등록</button>
      </div>
    </form>
  </div>
</div>

<style lang="postcss">
.input-wrapper {
  @apply flex flex-col items-start
}
select {
  @apply mt-2 w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6
}
input {
  @apply min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6
}

button {
  @apply flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
}
</style>