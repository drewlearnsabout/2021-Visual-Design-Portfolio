<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<slot name="header"></slot>
	<hr>
	<slot></slot>
	<hr>

	<!-- svelte-ignore a11y-autofocus -->
	<button autofocus on:click={close}>Close</button>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		font-family: 'PT Sans Narrow', sans-serif;
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 7em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.5em;
		color: white;
		background: #383838;
		z-index: 3;
	}

	button {
		display: block;
		font-size: 1.2em;
		font-weight: bold;
		font-family: 'PT Sans Narrow', sans-serif;
		border-radius: 200px;
		border: none;
		transition-duration: 0.3s;
	}
	button:hover {
		box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
		transform: translateY(-1px);
	}
	@media only screen and (max-width: 850px) and (max-height: 500px) {
        .modal {
            top: 65%;
        }
    }
</style>