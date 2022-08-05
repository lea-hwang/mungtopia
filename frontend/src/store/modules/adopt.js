// import api from '@/api/api';
// import axios from 'axios';

export default {
	namespaced: true,
	state() {
		return {
			adoptType: '',
			applicantMainList: [],
			protectorMainList: [],
			applicantDetail: {},
			protectorDetail: {},
			adoptProcess: [],
			activeApplicant: null,
			adoptionProcessId: null,
			applicationStatus: null,
			you: {},
			chatList: [],
			date: '',
			meetingRoomId: null,
		};
	},
	getters: {
		adoptType: state => state.adoptType,
		applicantMainList: state => state.applicantMainList,
		protectorMainList: state => state.protectorMainList,
		isApplicant: state => state.adoptType === 'applicant',
		applicantDetail: state => state.applicantDetail,
		protectorDetail: state => state.protectorDetail,
		adoptProcess: state => state.adoptProcess,
		activeApplicant: state => state.activeApplicant,
		adoptionProcessId: state => state.adoptionProcessId,
		applicationStatus: state => state.applicationStatus,
		chatList: state => state.chatList,
		you: state => state.you,
		date: state => state.date,
		meetingRoomId: state => state.meetingRoomId,
	},
	mutations: {
		SET_ADOPT_TYPE: (state, adoptType) => (state.adoptType = adoptType),
		SET_APPLICANT_MAIN_LIST: (state, applicantMainList) =>
			(state.applicantMainList = applicantMainList),
		SET_PROTECTOR_MAIN_LIST: (state, protectorMainList) =>
			(state.protectorMainList = protectorMainList),
		SET_APPLICANT_DETAIL: (state, applicantDetail) =>
			(state.applicantDetail = applicantDetail),
		SET_PROTECTOR_DETAIL: (state, protectorDetail) =>
			(state.protectorDetail = protectorDetail),
		SET_ADOPT_PROCESS: (state, adoptProcess) =>
			(state.adoptProcess = adoptProcess),
		SET_ACTIVE_APPICANT: (state, activeApplicant) =>
			(state.activeApplicant = activeApplicant),
		SET_ADOPTION_PROCESS_ID: (state, adoptionProcessId) =>
			(state.adoptionProcessId = adoptionProcessId),
		SET_APPLICATION_STATUS: (state, applicationStatus) =>
			(state.applicationStatus = applicationStatus),
		SET_CHAT_LIST: (state, chatList) => (state.chatList = chatList),
		SET_YOU: (state, you) => (state.you = you),
		SET_DATE: (state, date) => (state.date = date),
		SET_MEETING_ROOM_ID: (state, meetingRoomId) =>
			(state.meetingRoomId = meetingRoomId),
		SET_OPENVIDU_TOKEN: (state, openviduToken) =>
			(state.openviduToken = openviduToken),
		UPDATE_APPLICATION_STATUS: state => {
			state.applicationStatus += 1;
		},
		UPDATE_NEW_CHAT: (state, chat) => {
			state.chatList.push(chat);
		},
	},
	actions: {
		// 입양하기 메인
		fetchApplicantMainList: ({ commit, rootGetters }, userId) => {
			console.log(rootGetters, userId);
			// axios({
			// 	url: api.adopt.applicantMain(userId),
			// 	method: 'get',
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data.applicationList);
			// 		commit('SET_ADOPT_TYPE', 'applicant');
			// 		commit('SET_APPLICANT_MAIN_LIST', res.data.applicationList);
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});
			const newApplicationList = [
				{
					applicationId: 1,
					dogImg:
						'https://upload.wikimedia.org/wikipedia/commons/c/c4/Emily_Maltese.jpg', // 제일 첫번째 사진
					dogName: '처음',
					applicationStatus: 1,
				},
				{
					applicationId: 2,
					dogImg:
						'https://upload.wikimedia.org/wikipedia/commons/c/c4/Emily_Maltese.jpg', // 제일 첫번째 사진
					dogName: '예시',
					applicationStatus: 6,
				},
			];
			commit('SET_ADOPT_TYPE', 'applicant');
			commit('SET_APPLICANT_MAIN_LIST', newApplicationList);
		},
		// 입양하기 & 입양보내기 메인
		changeAdoptType: ({ commit, rootGetters }, { adoptType, userId }) => {
			console.log(commit, rootGetters, adoptType, userId);
			// if (adoptType === 'applicant') {
			// 	// 입양하기 버튼
			// 	axios({
			// 		url: api.adopt.applicantMain(userId),
			// 		method: 'get',
			// 		headers: rootGetters['auth/authHeader'],
			// 	})
			// 		.then(res => {
			// 			console.log(res.data.applicationList);
			// 			commit('SET_ADOPT_TYPE', 'applicant');
			// 			commit('SET_APPLICANT_MAIN_LIST', res.data.applicationList);
			// 		})
			// 		.catch(err => {
			// 			console.error(err.response);
			// 		});
			// } else {
			// 	// 입양보내기 버튼
			// 	axios({
			// 		url: api.adopt.protectorMain(userId),
			// 		method: 'get',
			// 		headers: rootGetters['auth/authHeader'],
			// 	})
			// 		.then(res => {
			// 			console.log(res.data.boardList);
			// 			commit('SET_ADOPT_TYPE', 'protector');
			// 			commit('SET_PROTECTOR_MAIN_LIST', res.data.boardList);
			// 		})
			// 		.catch(err => {
			// 			console.error(err.response);
			// 		});
			// }

			if (adoptType === 'applicant') {
				const newApplicationList = [
					{
						applicationId: 1,
						dogImg:
							'https://upload.wikimedia.org/wikipedia/commons/c/c4/Emily_Maltese.jpg', // 제일 첫번째 사진
						dogName: '버튼누르기',
						applicationStatus: 1,
					},
					{
						applicationId: 2,
						dogImg:
							'https://upload.wikimedia.org/wikipedia/commons/c/c4/Emily_Maltese.jpg', // 제일 첫번째 사진
						dogName: '예시',
						applicationStatus: 6,
					},
				];
				commit('SET_ADOPT_TYPE', 'applicant');
				commit('SET_APPLICANT_MAIN_LIST', newApplicationList);
			} else {
				const newProtectorMainList = [
					{
						boardId: 1,
						dogImg:
							'https://upload.wikimedia.org/wikipedia/commons/c/c4/Emily_Maltese.jpg', // 제일 첫번째 사진
						dogName: '보호자 예시',
						adoptionStatus: 0, // 0, 1, 2
					},
					{
						boardId: 2,
						dogImg:
							'https://upload.wikimedia.org/wikipedia/commons/c/c4/Emily_Maltese.jpg', // 제일 첫번째 사진
						dogName: '몽이',
						adoptionStatus: 1, // 0, 1, 2
					},
				];
				commit('SET_ADOPT_TYPE', 'protector');
				commit('SET_PROTECTOR_MAIN_LIST', newProtectorMainList);
			}
		},

		// 입양하기 상세
		fetchApplicantDetail: ({ commit, rootGetters }, applicationId) => {
			console.log(rootGetters, applicationId);
			// axios({
			// 	url: api.adopt.applicantDetail(applicationId),
			// 	method: 'get',
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data);
			// 		commit('SET_APPLICANT_DETAIL', res.data);
			// 		commit('SET_APPLICATION_STATUS', res.data.applicationStatus);
			// commit(
			// 	'SET_MEETING_ROOM_ID',
			// 	res.data.meetingRoom.meetingRoomId,
			// );
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});

			const newApplicantDetail = {
				dogImg:
					'https://upload.wikimedia.org/wikipedia/commons/c/c4/Emily_Maltese.jpg', // 제일 첫번째 사진
				dogName: '몽이',
				boardId: 1,
				chatRoomId: 1,
				applicationStatus: 2,
				meetingRoom: {
					meetingRoomId: 1,
					active: true,
				},
			};
			commit('SET_APPLICANT_DETAIL', newApplicantDetail);
			commit('SET_APPLICATION_STATUS', newApplicantDetail.applicationStatus);
			commit(
				'SET_MEETING_ROOM_ID',
				newApplicantDetail.meetingRoom.meetingRoomId,
			);
		},
		// 입양하기 - 입양절차
		fetchApplicantAdoptProcess: ({ commit, rootGetters }, applicationId) => {
			// axios({
			// 	url: api.adopt.applicantDetailProcess(applicationId),
			// 	method: 'get',
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data.adoptProcess);
			// const process = res.data.adoptProcess;
			// 		commit('SET_ADOPT_PROCESS', res.data.adoptProcess);
			// 		commit('SET_ADOPTION_PROCESS_ID', res.data.adoptionProcessId);
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});

			console.log(rootGetters, applicationId);
			const adoptionProcessId = 1;
			const newAdoptProcess = [
				{
					step: 1,
					stepStatus: true,
					date: '2022.07.12 13:00:00',
				},
				{
					step: 2, // 1,2,3,4,5
					stepStatus: true,
					date: '2022.07.12 13:00:00',
				},
				{
					step: 3, // 1,2,3,4,5
					stepStatus: false,
					date: '',
				},
				{
					step: 4, // 1,2,3,4,5
					stepStatus: false,
					date: '',
				},
				{
					step: 5, // 1,2,3,4,5
					stepStatus: false,
					date: '',
				},
			];
			commit('SET_ADOPTION_PROCESS_ID', adoptionProcessId);
			commit('SET_ADOPT_PROCESS', newAdoptProcess);
		},

		// 입양보내기 상세
		fetchProtectorDetail: ({ commit, rootGetters }, boardId) => {
			// axios({
			// 	url: api.adopt.protectorDetail(boardId),
			// 	method: 'get',
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data);
			// 		commit('SET_PROTECTOR_DETAIL', res.data);
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});
			console.log(rootGetters, boardId);
			const newProtectorDetail = {
				boardId: 1,
				dogImg:
					'https://upload.wikimedia.org/wikipedia/commons/c/c4/Emily_Maltese.jpg', // 제일 첫번째 사진
				dogName: '몽이',
				applicationList: [
					{
						userId: 1,
						profile: 'https://freesvg.org/img/abstract-user-flat-4.png',
						name: '황희원',
						applicationStatus: 4,
						adoptionProcessId: 3,
						chatRoomId: 1,
						meetingRoom: {
							meetingRoomId: 1,
							active: true,
						},
					},
				],
			};
			commit('SET_PROTECTOR_DETAIL', newProtectorDetail);
		},
		// 입양 보내기 - 입양절차
		fetchProtectorAdoptProcess: (
			{ commit, rootGetters },
			{ adoptionProcessId, applicationStatus, meetingRoomId },
		) => {
			commit('SET_APPLICATION_STATUS', applicationStatus);
			commit('SET_ADOPTION_PROCESS_ID', adoptionProcessId);
			commit('SET_MEETING_ROOM_ID', meetingRoomId);
			// axios({
			// 	url: api.adopt.protectorDetailProcess(adoptionProcessId),
			// 	method: 'get',
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data);
			// 		const process = res.data.adoptProcess
			// 		commit('SET_ADOPT_PROCESS', process);
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});

			console.log(rootGetters);
			const newAdoptProcess = [
				{
					step: 1,
					stepStatus: true,
					date: '2022.07.12 13:00:00',
				},
				{
					step: 2, // 1,2,3,4,5
					stepStatus: true,
					date: '2022.07.12 13:00:00',
				},
				{
					step: 3, // 1,2,3,4,5
					stepStatus: true,
					date: '2022.07.12 13:00:00',
				},
				{
					step: 4, // 1,2,3,4,5
					stepStatus: true,
					date: '2022.07.12 13:00:00',
				},
				{
					step: 5, // 1,2,3,4,5
					stepStatus: false,
					date: '',
				},
			];
			commit('SET_ADOPT_PROCESS', newAdoptProcess);
			commit('SET_ADOPTION_PROCESS_ID', adoptionProcessId);
			commit('SET_APPLICATION_STATUS', applicationStatus);
		},
		updateActiveApplicant: ({ commit }, activeApplicant) => {
			commit('SET_ACTIVE_APPICANT', activeApplicant);
		},

		// 입양 상태 변경
		updateAdoptProcess: (
			{ commit, rootGetters },
			{ step, adoptionProcessId },
		) => {
			// axios({
			// 	url: api.adopt.processUpdate(adoptionProcessId),
			// 	method: 'put',
			// 	data: { step, stepStatus: true },
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data);
			// 		commit('SET_ADOPT_PROCESS', res.data.adoptProcess);
			// 		commit('UPDATE_APPLICATION_STATUS');
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});
			console.log(rootGetters, step, adoptionProcessId);

			const newAdoptProcess = [
				{
					step: 1,
					stepStatus: true,
					date: '2022.07.10',
				},
				{
					step: 2, // 1,2,3,4,5
					stepStatus: true,
					date: '2022.07.12 2PM',
				},
				{
					step: 3, // 1,2,3,4,5
					stepStatus: true,
					date: '2022.07.12 2PM',
				},
				{
					step: 4, // 1,2,3,4,5
					stepStatus: true,
					date: '2022.07.12 2PM',
				},
				{
					step: 5, // 1,2,3,4,5
					stepStatus: true,
					date: '2022.07.12 2PM',
				},
			];
			commit('SET_ADOPT_PROCESS', newAdoptProcess);
			commit('UPDATE_APPLICATION_STATUS');
		},

		// 스케줄 일정 저장
		saveDate: (
			{ commit, rootGetters },
			{ adoptionProcessId, applicationStatus },
		) => {
			console.log(rootGetters, applicationStatus);
			// axios({
			// 	url: api.adopt.schedules(adoptionProcessId),
			// 	method: 'get',
			// 	data: { pageNo: 1, range: 15 },
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data);
			// 		commit('SET_DATE', res.data.date);
			// 		commit('SET_APPLICATION_STATUS', res.data.step);
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});
			commit('SET_ADOPTION_PROCESS_ID', adoptionProcessId);
			commit('SET_APPLICATION_STATUS', 4);
			commit('SET_DATE', '08/17/2022, 14:56');
		},

		// chatList 받기
		fetchChatMain: ({ commit, rootGetters }, chatRoomId) => {
			// axios({
			// 	url: api.adopt.chats(chatRoomId),
			// 	method: 'get',
			// 	data: { pageNo: 1, range: 15 },
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data);

			// 		const you = {
			// 			userId: res.data.userId,
			// 			nickname: res.data.nickname,
			// 			profile: res.data.profile,
			// 		};
			// 		commit('SET_CHAT_LIST', res.data.chatList);
			// 		commit('SET_YOU', you);
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});
			console.log(rootGetters, chatRoomId);
			const data = {
				pageNo: 1,
				range: 15,
				userId: 1, //상대방 id
				nickname: '황희원', //상대방 닉네임
				profile: '', //상대방 프로필
				chatList: [
					{
						userId: 1,
						time: '1시간 전',
						message:
							'안녕하세요! 몽이 입양신청서 작성하신거 보고 연락드렸어요!!',
					},
					{
						userId: 2,
						time: '1시간 전',
						message: '안녕하세요:)',
					},
					{
						userId: 2,
						time: '30분 전',
						message:
							'면담일정은 어떻게 되나요? 제가 내일은 발표가 있어서 어렵습니다.:)',
					},
					{
						userId: 1,
						time: '25분 전',
						message: '화요일 오후 2시 어떠신가요? 그때가 좋을 것 같습니다^^',
					},
					{
						userId: 2,
						time: '20분 전',
						message: '네 그때 좋습니다^^',
					},
					{
						userId: 1,
						time: '10분 전',
						message: '네 그럼 일정 예약해두겠습니다!',
					},
				],
			};
			const you = {
				userId: data.userId,
				nickname: data.nickname,
				profile: data.profile,
			};
			commit('SET_CHAT_LIST', data.chatList);
			commit('SET_YOU', you);
		},
		// 메세지 보내기
		sendChat: ({ commit, rootGetters }, { chat, chatRoomId }) => {
			// axios({
			// 	url: api.adopt.chatCreate(chatRoomId, rootGetters['auth/user'].userId),
			// 	method: 'post',
			// 	data: { message: chat.message },
			// 	headers: rootGetters['auth/authHeader'],
			// })
			// 	.then(res => {
			// 		console.log(res.data);
			// 		commit('UPDATE_NEW_CHAT', chat);
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 	});

			console.log(rootGetters, chat, chatRoomId);
			commit('UPDATE_NEW_CHAT', chat);
		},

		// 일정 예약 및 수정
		saveSchedule: ({ commit, rootGetters, getters }, { date }) => {
			const payload = { step: getters.applicationStatus, date };
			console.log(payload, rootGetters);
			// // 일정이 없을 때
			// if (getters.date === '') {
			// 	axios({
			// 		url: api.adopt.scheduleCreate(getters.adoptionProcessId),
			// 		method: 'post',
			// 		data: { payload },
			// 		headers: rootGetters['auth/authHeader'],
			// 	}).catch(err => {
			// 		console.error(err.response);
			// 	});
			// } else {
			// 	// 일정이 있을 때(일정 수정)
			// 	axios({
			// 		url: api.adopt.scheduleUpdate(getters.adoptionProcessId),
			// 		method: 'put',
			// 		data: { payload },
			// 		headers: rootGetters['auth/authHeader'],
			// 	}).catch(err => {
			// 		console.error(err.response);
			// 	});
			// }
			commit('SET_DATE', date);
		},
		// 일정 삭제
		deleteSchedule: ({ commit, rootGetters, getters }) => {
			const payload = { step: getters.applicationStatus };
			console.log(rootGetters, payload);
			// axios({
			// 	url: api.adopt.scheduleDelete(getters.adoptionProcessId),
			// 	method: 'delete',
			// 	data: { payload },
			// 	headers: rootGetters['auth/authHeader'],
			// }).catch(err => {
			// 	console.error(err.response);
			// });
			commit('SET_DATE', '');
		},

		// 비디오 토큰 받기
		getToken: ({ commit }, sessionName) => {
			axios({
				url: 'http://localhost:5001/api-sessions/get-token',
				method: 'post',
				data: { sessionName },
				// headers: rootGetters['auth/authHeader'],
			})
				.then(res => {
					console.log('here');
					console.log(res);
					const openviduToken = res[0]; // Get token from response
					console.warn(
						'Request of TOKEN gone WELL (TOKEN:' + openviduToken + ')',
					);
					commit('SET_OPENVIDU_TOKEN', openviduToken);
					// callback(token); // Continue the join operation
				})
				.catch(err => {
					console.error(err.response);
				});
		},
	},
};
