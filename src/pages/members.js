import React from "react";
import Layout from "../components/layout";

const Members = () => {

	const members = [
		{
			year: "2020-21",
			names: ["Vaibhav Krishna Singh Raghav", "Aditya Keshari", "Abhishek Upadhyay"]
		},
		{
			year: "2019-20",
			names: ["Satyam Tyagi", "Govindswaroop Rahangdale", "Ayush Kumar Singh"]
		},
		{
			year: "2018-19",
			names: ["Yash Agarwal", "Sambhav Jain", "V S V Surya Prakash"]
		},
		{
			year: "2017-18",
			names: ["Archisha Patki", "Tarush Tiwari", "Vineesha Srivastava"]
		},
		{
			year: "2016-17",
			names: ["Soumyadeep Das", "Asmita Mekala", "Gaurav Somani"]
		},
	];

	return (
		<Layout>
			<div class="mx-auto px-4 sm:px-8">
				<div class="py-8">
					<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div class="inline-block min-w-full overflow-hidden">
							{
								members.map(data => {
									return (
										<>
											<div class="flex justify-center my-5">
												<div class="text-gray-200 text-4xl">{data.year}</div>
											</div>
											<table class="min-w-full leading-normal mb-10">
												<tbody>
													<tr>
														<td class="flex items-center justify-around py-5 border-b border-gray-200 bg-gray-300 text-md rounded-t-lg">
															<div class="w-1/2 text-center">
																<p class="text-gray-900 font-semibold">Secretary</p>
															</div>
															<div class="w-1/2 text-center">
																<p class="relative pr-2">{data.names[0]}</p>
															</div>
														</td>
													</tr>
													<tr>
														<td class="flex items-center justify-around py-5 border-b border-gray-200 bg-gray-300 text-md rounded-b-lg">
															<div class="w-1/2 text-center">
																<p class="text-gray-900 font-semibold">Joint Secretaries</p>
															</div>
															<div class="w-1/2 text-center">
																<p class="relative pr-2">{data.names[1]} & {data.names[2]}</p>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);

};

export default Members;
