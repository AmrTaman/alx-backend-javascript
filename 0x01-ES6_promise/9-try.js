import divideFunction from './8-try';

export default function guardrail(mathFunction) {
  const lst = [];
  try {
	  lst.push(mathFunction());
  }
  catch (error) {
	  lst.push(String(error));
  }
  lst.push('Guardrail was processed');
  return lst;
}
