interface InitOpts {
  force: boolean;
}

export type InitExec = (name: string, opts: InitOpts) => void;

const init: InitExec = (name, opts) => {
  console.log(name);
  console.log(opts);
};

export default init;
