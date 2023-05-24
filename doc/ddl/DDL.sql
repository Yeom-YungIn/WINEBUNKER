-- 사용자 게시물 관련 DDL
-- 사용자 게시물
CREATE TABLE public.resource (
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    publisher_id varchar(255) NULL,
    vin int8 NOT NULL,
    description varchar(255) NOT NULL,
    issued timestamptz NOT NULL,
    modified timestamptz NULL,
    purchase_date timestamptz NOT NULL,
    CONSTRAINT resource_pkey PRIMARY KEY (id),
    CONSTRAINT resource_vin_fkey FOREIGN KEY (vin) REFERENCES public.vin(vin_sn)
);

-- 와인 가격
CREATE TABLE public.resource_price (
    resource_id uuid NOT NULL,
    price int8 NOT NULL,
    store varchar(255) NOT NULL,
    capacity varchar(255) NOT NULL,
    issued timestamptz NOT NULL,
    modified timestamptz NULL,
    CONSTRAINT resource_price_fk FOREIGN KEY (resource_id) REFERENCES public.resource(id)
);

-- 게시물 comment
CREATE TABLE public.resource_comment (
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    resource_id uuid NOT NULL,
    commentor_id varchar(255) NOT NULL,
    "comment" varchar(255) NULL,
    issued timestamptz NOT NULL,
    modified timestamptz NULL,
    created_at timestamptz NOT NULL,
    updated_at timestamptz NOT NULL,
    CONSTRAINT resource_comment_fk FOREIGN KEY (resource_id) REFERENCES public.resource(id)
);

-- 게시물 image
CREATE TABLE public.resource_image (
    resource_id uuid NOT NULL,
    issued timestamptz NOT NULL,
    created_at timestamptz NOT NULL,
    updated_at timestamptz NOT NULL,
    "imageLocation" varchar(255) NOT NULL,
    CONSTRAINT resource_image_fk FOREIGN KEY (resource_id) REFERENCES public.resource(id)
);

-- 와인
CREATE TABLE public.vin (
    vin_sn int8 NOT NULL,
    vin_name varchar(255) NOT NULL,
    vin_name_kor varchar(255) NOT NULL,
    region varchar(255) NOT NULL,
    "type" varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    issued timestamptz NOT NULL,
    modified timestamptz NULL,
    CONSTRAINT vin_pkey PRIMARY KEY (vin_sn)
);

-- public.vin foreign keys
ALTER TABLE public.vin ADD CONSTRAINT vin_region_fk FOREIGN KEY (region) REFERENCES public.common_code(code);

-- 공통코드
CREATE TABLE public.common_code (
    code varchar NOT NULL,
    code_name varchar(255) NOT NULL,
    code_name_kor varchar(255) NOT NULL,
    sort_order varchar(255) NOT NULL,
    description varchar(255) NULL,
    issued timestamptz NOT NULL,
    modified timestamptz NULL,
    CONSTRAINT cmmn_pkey PRIMARY KEY (code_name)
);