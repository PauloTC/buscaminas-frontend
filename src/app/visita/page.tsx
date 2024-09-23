export default function ClientVisitPage() {
  return (
    <div>
      <h3 className="dl-text-2xl dl-mb-8 dl-font-medium">
        Información de la visita
      </h3>
      <div>
        <div className="dl-relative dl-w-full">
          <label
            htmlFor="priority"
            className="
              dl-flex
              dl-text-xs
              dl-font-normal
              dl-text-neutral-darkest
              dl-absolute
              dl-left-3
              dl-px-1
              -dl-top-2
              dl-bg-white"
          >
            Prioridad
          </label>
          <select
            className="
              dl-outline-0
              dl-bg-neutral-lightest
              dl-border
              dl-border-neutral-medium
              dl-text-neutral-darkest
              dl-h-12
              dl-w-full
              dl-px-3
              dl-rounded-lg
            "
          >
            <option defaultValue="">Bodega</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
        </div>

        <div className="dl-relative dl-w-full">
          <label
            htmlFor="status"
            className="
              dl-flex
              dl-text-xs
              dl-font-normal
              dl-text-neutral-darkest
              dl-absolute
              dl-left-3
              dl-px-1
              -dl-top-2
              dl-bg-white"
          >
            Estado Actual
          </label>
          <select
            className="
              dl-outline-0
              dl-bg-neutral-lightest
              dl-border
              dl-border-neutral-medium
              dl-text-neutral-darkest
              dl-h-12
              dl-w-full
              dl-px-3
              dl-rounded-lg
            "
          >
            <option defaultValue="">Bodega</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
        </div>

        <div className="dl-relative">
          <textarea
            className="dl-w-full dl-p-4 dl-border dl-border-neutral-medium dl-outline-none dl-rounded-lg dl-text-base dl-bg-transparent dl-placeholder-transparent focus:dl-placeholder-neutral-medium dl-peer dl-text-neutral-dark dl-opacity-70 focus:dl-border-neutral-medium"
            id="comments"
            placeholder="Placeholder del textarea"
          ></textarea>
          <label
            className="dl-absolute -dl-top-2.5 dl-left-4 dl-text-neutral-dark dl-text-sm dl-transition-all dl-duration-200 dl-bg-white dl-px-1 peer-placeholder-shown:dl-top-4 peer-placeholder-shown:dl-text-base peer-focus:-dl-top-2.5 peer-focus:dl-text-sm dl-opacity-70"
            htmlFor="idtxtarea"
          >
            Comentarios de la visita
          </label>
        </div>
      </div>

      <h3
        className="dl-mb-8
        dl-text-neutral-darkest
        dl-text-2xl
        dl-font-medium
        dl-border-t
        dl-pt-10
        dl-mt-10
        dl-border-neutral-dark"
      >
        Ubicación del cliente
      </h3>
    </div>
  );
}
