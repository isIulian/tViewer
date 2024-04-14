import { useState } from "react";
import { GoSearch } from "react-icons/go";

const TrackList = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    setQuery({ search });
    //setSearch("");
  };

  return (
    <>
    <div className="flex flex-col">
<div className="overflow-x-auto">
<div className="align-middle inline-block min-w-full">
<div className="shadow overflow-hidden">
<table className="table-fixed min-w-full divide-y divide-gray-200">
<thead className="bg-gray-100">
<tr>
<th scope="col" className="p-4">
<div className="flex items-center">
<input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-all" className="sr-only">checkbox</label>
</div>
</th>
<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
Name
</th>
<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
Position
</th>
<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
Country
</th>
<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
Status
</th>
<th scope="col" className="p-4">
</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-1" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil Sims avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Neil Sims</div>
<div className="text-sm font-normal text-gray-500">neil.sims@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Front-end developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">United States</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-2" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-2" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/roberta-casas.png" alt="Roberta Casas avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Roberta Casas</div>
<div className="text-sm font-normal text-gray-500">roberta.casas@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Designer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Spain</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-3" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-3" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Michael Gough avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Michael Gough</div>
<div className="text-sm font-normal text-gray-500">michael.gough@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">React developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">United Kingdom</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-4" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-4" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/jese-leos.png" alt="Jese Leos avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Jese Leos</div>
<div className="text-sm font-normal text-gray-500">jese.leos@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Marketing</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">United States</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-5" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-5" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/bonnie-green.png" alt="Bonnie Green avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Bonnie Green</div>
<div className="text-sm font-normal text-gray-500">bonnie.green@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">UI/UX Engineer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Australia</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-6" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-6" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/thomas-lean.png" alt="Thomas Lean avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Thomas Lean</div>
<div className="text-sm font-normal text-gray-500">thomas.lean@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Vue developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Germany</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-7" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-7" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/helene-engels.png" alt="Helene Engels avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Helene Engels</div>
<div className="text-sm font-normal text-gray-500">helene.engels@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Product owner</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Canada</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-8" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-8" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/lana-byrd.png" alt="Lana Byrd avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Lana Byrd</div>
<div className="text-sm font-normal text-gray-500">lana.byrd@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Designer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">United States</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-9" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-9" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/leslie-livingston.png" alt="Leslie Livingston avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Leslie Livingston</div>
<div className="text-sm font-normal text-gray-500">leslie.livingston@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Web developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">France</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-10" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-10" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/robert-brown.png" alt="Robert Brown avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Robert Brown</div>
<div className="text-sm font-normal text-gray-500">robert.brown@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Laravel developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Russia</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-11" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-11" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil Sims avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Neil Sims</div>
<div className="text-sm font-normal text-gray-500">neil.sims@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Front-end developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">United States</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-12" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-12" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/roberta-casas.png" alt="Roberta Casas avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Roberta Casas</div>
<div className="text-sm font-normal text-gray-500">roberta.casas@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Designer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Spain</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-13" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-13" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Michael Gough avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Michael Gough</div>
<div className="text-sm font-normal text-gray-500">michael.gough@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">React developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">United Kingdom</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-14" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-14" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/jese-leos.png" alt="Jese Leos avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Jese Leos</div>
<div className="text-sm font-normal text-gray-500">jese.leos@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Marketing</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">United States</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-15" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-15" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/bonnie-green.png" alt="Bonnie Green avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Bonnie Green</div>
<div className="text-sm font-normal text-gray-500">bonnie.green@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">UI/UX Engineer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Australia</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-16" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-16" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/thomas-lean.png" alt="Thomas Lean avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Thomas Lean</div>
<div className="text-sm font-normal text-gray-500">thomas.lean@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Vue developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Germany</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-17" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-17" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/helene-engels.png" alt="Helene Engels avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Helene Engels</div>
<div className="text-sm font-normal text-gray-500">helene.engels@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Product owner</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Canada</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-18" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-18" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/lana-byrd.png" alt="Lana Byrd avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Lana Byrd</div>
<div className="text-sm font-normal text-gray-500">lana.byrd@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Designer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">United States</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-19" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-19" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/leslie-livingston.png" alt="Leslie Livingston avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Leslie Livingston</div>
<div className="text-sm font-normal text-gray-500">leslie.livingston@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Web developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">France</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
<tr className="hover:bg-gray-100">
<td className="p-4 w-4">
<div className="flex items-center">
<input id="checkbox-20" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
<label htmlFor="checkbox-20" className="sr-only">checkbox</label>
</div>
</td>
<td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
<img className="h-10 w-10 rounded-full" src="https://demo.themesberg.com/windster/images/users/robert-brown.png" alt="Robert Brown avatar" />
<div className="text-sm font-normal text-gray-500">
<div className="text-base font-semibold text-gray-900">Robert Brown</div>
<div className="text-sm font-normal text-gray-500">robert.brown@windster.com</div>
</div>
</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Laravel developer</td>
<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Russia</td>
<td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
<div className="flex items-center">
<div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
</div>
</td>
<td className="p-4 whitespace-nowrap space-x-2">
<button type="button" data-modal-toggle="user-modal" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
Edit user
</button>
<button type="button" data-modal-toggle="delete-user-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
<svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
Delete user
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div></>
  );
};

export { TrackList };
