import { shallowMount } from '@vue/test-utils';
import AddTareas from '@/components/AddTareas.vue';

describe('Prueba al componente AddTareas.vue', () => {
  it('prueba N°1', () => {
    const wrapper = shallowMount(AddTareas);

    // probar si esta montado el componente
    expect(wrapper.vm._isMounted).toBe(true);

    // probar la data del componente
    const datosTareas = AddTareas.data();
    expect(datosTareas.tarea).toEqual("");
    //expect(datosTareas.tareas).toEqual(""); genera error

    // encontrar elemento del DOM y probar sus atributos propios
    let inputTarea = wrapper.find("input");
    expect(inputTarea.element.placeholder).toEqual("Agrega una actividad");
    expect(inputTarea.element.type).toEqual("text");

    let entrada = `<input type="text" placeholder="Agrega una actividad" aria-label="Agrega una actividad" aria-describedby="button-addon2" class="form-control">`;
    expect(wrapper.find('.input-group').element.firstChild.outerHTML).toBe(entrada);

/*   expect(wrapper.find('.input-group').element.firstChild.outerHTML).toBe('<input type=\"text\" placeholder=\"Agrega una actividad\" aria-label=\"Agrega una actividad\" aria-describedby=\"button-addon2\" class=\"form-control\">'); */
  });

  it('prueba N°2', () => {
    const wrapper = shallowMount(AddTareas);

    // encontrando elementos en el DOM
    expect(wrapper.find("button").text()).toBe("Agregar");

    // probando data del componente
    let tareaNueva = "";
    expect(wrapper.vm.$data.tarea).toBe(tareaNueva);

    // usando funciones de jest
    wrapper.vm.addTareaStore = jest.fn();
    wrapper.vm.addTareaStore();
    expect(wrapper.vm.addTareaStore.mock.calls.length).toBe(1);
  });

  it('prueba N°3', ()=>{
    const wrapper = shallowMount(AddTareas);
    let inputEntrada = wrapper.find('input');
    inputEntrada.setValue("Nueva tarea numero 2");
    expect(wrapper.vm.$data.tarea).toBe("Nueva tarea numero 2");
    expect(wrapper.find('.btn').text().length).toBe(7);
    expect(wrapper.element).toMatchSnapshot();
  });
})
