import React from "react";

const Formulario = () => {
	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">
				Seguimiento pacientes
			</h2>

			<p className="text-lg mt-5 text-center mb-10">
				Añade Pacientes y {""}
				<span className="text-indigo-600 font-bold ">
					Adminístralos
				</span>
			</p>
			<form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="mascota"
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						placeholder="Nombre de la Mascota"
					/>
				</div>
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="propietario"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="text"
						placeholder="Nombre del Propietario"
					/>
				</div>
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="email"
					>
						Email
					</label>
					<input
						id="email"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="email"
						placeholder="Email de contacto"
					/>
				</div>
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="alta"
					>
						Alta
					</label>
					<input
						id="alta"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						type="date"
						placeholder="Alta"
					/>
				</div>
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="sintomas"
					>
						Síntomas
					</label>
					<textarea
						id="sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los Síntomas"
					/>
				</div>
				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
};

export default Formulario;
