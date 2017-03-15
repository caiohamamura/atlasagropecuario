var serverUrl = 'http://localhost:8000/graphql'

export function requestData() {
	return {
		type: 'REQ_DATA'
	};
}

function receiveData(data) {
	return {
		type: 'REC_DATA',
		data: data
	};
}

function inTransition() {
	return {
		type: 'IN_TRANS',
	};
}

export function transitionEnd() {
	return {
		type: 'TRANS_END',
	}
}

export function fetchQuery() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestData());
		return axios.get(servUrl + 'query.php', {
			params: { query: state.query }
		}).then((response) => {
			dispatch(receiveData(response.data));
			setTimeout(() => dispatch(inTransition()), 500);
		}).catch(e => {
			console.warn('Erro na resposta do servidor');
			console.warn(e);
		});
	}
}

export function openDownloadForm(layer) {
	return {
		type: 'DOWNLOAD_LAYER',
		layer: layer
	}
}

export function hideDownload() {
	return {
		type: 'HIDE_DOWNLOAD'
	}
}


export function openMetadata(layer) {
	return {
		type: 'OPEN_METADATA',
		layer: layer
	}
}

export function hideMetadata() {
	return {
		type: 'HIDE_METADATA'
	}
}

export function submitDownload(email) {
	return function (dispatch, getState) {
		var state = getState();
		var graphQuery =
			`mutation {
  insertOrUpdateUser (input: {
		varEmail: "${state.user.email}"
		varNome: "${state.user.nome}"
		varTelefone: "${state.user.telefone}"
		varInstituicao: "${state.user.instituicao}"
		varDepartamento: "${state.user.departamento}"
}) {
	string
}
}`
		axios.post(serverUrl, {query: graphQuery}).then();
		dispatch(executeDownload());
		dispatch(hideDownload());
	}
}

function executeDownload() {
	window.location.href="http://www.google.com.br";
}

function receivedUserInfo(user) {
	return {
		type: 'RECEIVE_USER',
		user: user
	}
}

export function getUserInfo(email) {
	var graphQuery = `{
		user: usuarioByEmail(email: "${email}") {
			email
			nome
			instituicao
			departamento
			telefone
		}
	}`

	return function (dispatch) {
		axios.post(serverUrl, {query: graphQuery}).then(({ data }) => {
				if (data.data.user) dispatch(receivedUserInfo(data.data.user));
			})
	}
}



export function updateFormValue(what, value) {
	return {
		type: 'UPDATE_FORM',
		what: what,
		value: value
	}
}